const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function resetDatabase() {
    console.log("Starting database reset...");
    
    // Parse DATABASE_URL
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        console.error("DATABASE_URL is not set in .env!");
        process.exit(1);
    }
    
    // Read the SQL dump file
    const sqlFilePath = path.join(__dirname, '..', 'restropro_saas.sql');
    if (!fs.existsSync(sqlFilePath)) {
        console.error("Could not find restropro_saas.sql at:", sqlFilePath);
        process.exit(1);
    }
    
    const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
    
    // Establish connection
    const conn = await mysql.createConnection(dbUrl + "?multipleStatements=true");
    console.log("Connected to MySQL successfully.");
    
    try {
        // Disable foreign key checks temporarily to safely recreate tables
        await conn.query("SET FOREIGN_KEY_CHECKS = 0;");
        
        // Execute the entire SQL script
        console.log("Executing SQL schema script...");
        await conn.query(sqlContent);
        
        // Enable foreign key checks back
        await conn.query("SET FOREIGN_KEY_CHECKS = 1;");
        
        console.log("🎉 Database has been reset successfully to a clean state!");
    } catch (error) {
        console.error("Error during database reset:", error);
    } finally {
        await conn.end();
    }
}

resetDatabase();
