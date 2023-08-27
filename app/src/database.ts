import postgres from 'postgres';

class Database {

    private static instance: Database;

    private constructor() {
        // Singleton class
    }

    public static getInstace(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    private options = {

        host: '127.0.0.1',
        port: 5432,

        database: 'appdb',
        username: 'dbuser',
        password: 'admin',

    };

    private sql = postgres(this.options);

    public async query(query: string): Promise<any> {
        try {
            const result = await this.sql.unsafe(query).then((res: any) => Object.values(res));
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default Database;