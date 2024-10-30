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
