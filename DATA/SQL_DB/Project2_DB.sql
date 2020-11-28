-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/LhtGml
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "WSC_fossils" (
    "Family" varchar   NOT NULL,
    "Genus" varchar   NOT NULL,
    "Species" varchar   NOT NULL,
    "Rel_date" varchar   NOT NULL,
    "locality" varchar   NOT NULL,
    CONSTRAINT "pk_WSC_fossils" PRIMARY KEY (
        "locality"
     )
);

CREATE TABLE "loc_data" (
    "TypeLocality" varchar   NOT NULL,
    "Amber" varchar   NOT NULL,
    "Lat_dec" float NOT NULL,
    "Long_dec" float NOT NULL,
    CONSTRAINT "pk_loc_data" PRIMARY KEY (
        "TypeLocality"
     )
);

CREATE TABLE "Dating_data" (
    "TypeLocality" varchar   NOT NULL,
    "Era" varchar   NOT NULL,
    "Period" varchar   NOT NULL,
    "Epoch" varchar   NOT NULL,
    "Age" varchar   NOT NULL,
    "Abs_age" int   NOT NULL,
    CONSTRAINT "pk_Dating_data" PRIMARY KEY (
        "TypeLocality"
     )
);

CREATE TABLE "PBDB_Review" (
    "Family" varchar   NOT NULL,
    "Genus" varchar   NOT NULL,
    "Species" varchar   NOT NULL,
    "Author" varchar   NOT NULL,
    "Year" varchar   NOT NULL,
    CONSTRAINT "pk_PBDB_Review" PRIMARY KEY (
        "Genus","Species"
     )
);

-- ALTER TABLE "WSC_fossils" ADD CONSTRAINT "fk_WSC_fossils_Genus_Species" FOREIGN KEY("Genus", "Species")
-- REFERENCES "PBDB_Review" ("Genus", "Species");

-- ALTER TABLE "WSC_fossils" ADD CONSTRAINT "fk_WSC_fossils_Rel_date" FOREIGN KEY("Rel_date")
-- REFERENCES "Dating_data" ("Period");

--  ALTER TABLE "loc_data" ADD CONSTRAINT "fk_loc_data_TypeLocality" FOREIGN KEY("TypeLocality")
-- 	REFERENCES "Dating_data" ("TypeLocality");

-- ALTER TABLE "loc_data" ADD CONSTRAINT "fk_loc_data_amber" FOREIGN KEY("amber")
-- REFERENCES "WSC_fossils" ("locality");



