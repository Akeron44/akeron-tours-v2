/*
  Warnings:

  - You are about to drop the column `language` on the `contacts` table. All the data in the column will be lost.
  - The `status` column on the `contacts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('NEW', 'READ', 'REPLIED');

-- AlterTable
ALTER TABLE "public"."contacts" DROP COLUMN "language",
DROP COLUMN "status",
ADD COLUMN     "status" "public"."Status" NOT NULL DEFAULT 'NEW';
