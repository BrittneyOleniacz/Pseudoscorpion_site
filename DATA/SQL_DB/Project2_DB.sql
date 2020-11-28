drop table WSC_fossils;
CREATE TABLE "WSC_fossils" (
    "Family" varchar   ,
	"Range" varchar   ,
    "Genus" varchar   ,
    "Species" varchar   ,
    "locality" varchar   ,
    "Rel_date" varchar   

);
drop table loc_data;
CREATE TABLE "loc_data" (
    "TypeLocality" varchar   ,
    "amber" varchar   ,
    "lat_dec" varchar   ,
    "long_dec" varchar   
);

drop table Dating_data;
CREATE TABLE "Dating_data" (
    "TypeLocality" varchar   ,
    "Era" varchar   ,
    "Period" varchar   ,
    "Epoch" varchar   ,
    "Age" varchar  ,
    "Abs_age" varchar   
);

drop table PBDB_Review;
CREATE TABLE "PBDB_Review" (
    "Family" varchar  ,
    "Genus" varchar   ,
    "Species" varchar   ,
    "Author" varchar  ,
    "Year" varchar  
);

drop table Works_cited;
CREATE TABLE "Works_cited" (
	"author" varchar  ,
	"pubyr" varchar  ,
	"reftitle" varchar  ,
	"pubtitle" varchar  ,
	"pubvol" varchar  ,
	"pubno" varchar  ,
	"firstpage" varchar  ,
	"lastpage" varchar  
);







