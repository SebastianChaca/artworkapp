import AsyncStorage from '@react-native-async-storage/async-storage';

const IDS_STORAGE_KEY = '@stored_ids';

export const getStoredIds = async (): Promise<string[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(IDS_STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to fetch the data from storage', e);
    return [];
  }
};
export const addIdToStorage = async (id: string): Promise<void> => {
  try {
    const storedIds = await getStoredIds();
    if (!storedIds.includes(id)) {
      const updatedIds = [...storedIds, id];
      const jsonValue = JSON.stringify(updatedIds);
      await AsyncStorage.setItem(IDS_STORAGE_KEY, jsonValue);
    }
  } catch (e) {
    console.error('Failed to add ID to storage', e);
  }
};

export const removeIdFromStorage = async (id: string): Promise<void> => {
  try {
    const storedIds = await getStoredIds();
    const updatedIds = storedIds.filter(storedId => storedId !== id);
    const jsonValue = JSON.stringify(updatedIds);
    await AsyncStorage.setItem(IDS_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to remove ID from storage', e);
  }
};
