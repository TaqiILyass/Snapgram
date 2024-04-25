import { Client, Account, Databases, Storage, Avatars } from "appwrite";


export const appwriteConfig = {
    // (.env.local) لكنه يحتاج إلى ملف(.env.local) هذا الكود يُستخدم للوصول إلى قيمة متغير البيئة الموجودة في ملف 
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL,
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECRION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECRION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECRION_ID
}

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);