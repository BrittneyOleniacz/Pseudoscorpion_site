-- Link to schema: https://app.quickdatabasediagrams.com/#/d/LhtGml

CREATE TABLE "WSC_fossils" (
    "Family" varchar,
    "Genus" varchar,
    "Species" varchar,
    "Rel_date" varchar,
    "locality" varchar,
);

CREATE TABLE "loc_data" (
    "TypeLocality" varchar,
    "Amber" varchar,
    "Lat_dec" float,
    "Long_dec" float,
 );   

CREATE TABLE "Dating_data" (
    "TypeLocality" varchar,
    "Era" varchar,
    "Period" varchar,
    "Epoch" varchar,
    "Age" varchar,
    "Abs_age" float,
);

CREATE TABLE "PBDB_Review" (
    "Family" varchar,
    "Genus" varchar,
    "Species" varchar,
    "Author" varchar,
    "Year" varchar, 
);

CREATE TABLE "Works_cited" (
	"author" varchar,
	"pubyr" varchar,
	"reftitle" varchar,
	"pubtitle" varchar,
	"pubvol" varchar,
	"pubno" varchar,
	"firstpage" varchar,
	"lastpage" varchar  
);