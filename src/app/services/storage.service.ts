import {Injectable} from '@angular/core';
import {CapacitorDataStorageSqlite, capOpenStorageOptions} from 'capacitor-data-storage-sqlite';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly #options: capOpenStorageOptions = {
    database: 'notquitehuman',
    table: 'keyValueStorageSqlite',
  };

  constructor() {
    this.#initStore();
  }

  /**
   * Open a connection to the database.
   *
   * @private
   */
  async #initStore(): Promise<void> {
    try {
      await CapacitorDataStorageSqlite.openStore(this.#options);
    } catch (err) {
      console.log('Error initialising capacitor-data-storage-sqlite.');
      console.log(err);
    }
  }

  /**
   * Check if a store is opened
   *
   * @returns True if the store is opened, false otherwise.
   */
  async #isStoreOpen(): Promise<boolean> {
    try {
      const {result} = await CapacitorDataStorageSqlite.isStoreOpen({database: this.#options.database});
      return result;
    } catch {
      return false;
    }
  }

  /**
   * Store the given key-value pair in an embedded SQLite database.
   *
   * @param key The key under which to store data.
   * @param value The value that is to be stored. Must be an object.
   */
  async persistObjectData(key: string, value: any): Promise<void> {
    await this.#ensureOpenStore();
    await CapacitorDataStorageSqlite.set({key, value: JSON.stringify(value)});
  }

  /**
   * Load the JSON data attached to the given key.
   *
   * @param key The key for which to retrieve data.
   * @return The parsed object cast to the given type, or null if the key doesn't exist.
   */
  async loadJSONData<T>(key: string): Promise<T> {
    await this.#ensureOpenStore();
    const {result} = await CapacitorDataStorageSqlite.iskey({key});

    if (result) {
      const {value} = await CapacitorDataStorageSqlite.get({key});
      return JSON.parse(value) as T;
    }
    return null;
  }

  /**
   * Helper method to call before storing or retrieving something.
   * If the store hasn't been opened yet, this method ensures that it is openend before this method resolves.
   *
   * @private
   */
  async #ensureOpenStore(): Promise<void> {
    const isOpen = await this.#isStoreOpen();
    if (!isOpen) {
      await this.#initStore();
    }
  }
}

/**
 * Source code made by SebastiaanTM
 */
