-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "itemCategory" TEXT NOT NULL,
    "itemImg" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemDescription" TEXT,
    "itemPrice" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" TEXT NOT NULL,
    "itemCategory" TEXT NOT NULL,
    "itemImg" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "itemDescription" TEXT,
    "itemCount" INTEGER NOT NULL,
    "itemPrice" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "userAddress" TEXT NOT NULL,
    "userFlat" TEXT NOT NULL,
    "userFloor" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userFeedback" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promocode" (
    "id" TEXT NOT NULL,
    "promocode" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Promocode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
