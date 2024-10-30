## Prisma

1. Add .env file with below PostgreSql related connection string. Replace the values with the right info.
   `DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"`

2. After installing Prisma:
   `npx prisma init`

3. Add data table models in `schema.prisma` file. Then,
   `npx prisma generate`
   `npx prisma migrate dev --name init`

4. Add seed data into `seedData` folder
5. Create `seed.ts` and add functions to clear the db and seed the data with the seed files.
6. Add below npm script in `package.json` file.
   `"seed": "ts-node prisma/seed.ts"`

7. Then run below npm command to seed the data into the connected db
   `npm run seed`

8. Whenever the data models in the `schema.prisma` gets changed, run step 3

9. SQL command for resetting the id in the id column of the database table to assist the auto increment happens after the existing rows. This command needs to be run just for one time. So open the database management tool like pgAdmin 4 and select a particular table and run below SQL code. Of course after changing the table name and id column name. If the last row id value is 10, and after the SQL code runs, when new data row is pushed the id will be 11.
   `SELECT setval(pg_get_serial_sequence('"TABLE_NAME"', 'id'), coalesce(max(id)+1, 1), false) FROM "TABLE_NAME"`

Example: Project table. So, the createProject endpoint pushes the new data to the database where the new row will be created after the existing rows with the continued id based on the existing rows.
`SELECT setval(pg_get_serial_sequence('"Project"', 'id'), coalesce(max(id)+1, 1), false) FROM "Project"`
