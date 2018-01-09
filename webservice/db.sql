#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: categorie_sport
#------------------------------------------------------------

CREATE TABLE categorie_sport(
        id  int (11) Auto_increment  NOT NULL ,
        nom Varchar (30) NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: niveau
#------------------------------------------------------------

CREATE TABLE niveau(
        id  int (11) Auto_increment  NOT NULL ,
        nom Varchar (30) NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: lieu
#------------------------------------------------------------

CREATE TABLE lieu(
        id      int (11) Auto_increment  NOT NULL ,
        nom     Varchar (50) NOT NULL ,
        ville   Varchar (50) NOT NULL ,
        adresse Varchar (50) NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: personne
#------------------------------------------------------------

CREATE TABLE personne(
        id                    int (11) Auto_increment  NOT NULL ,
        nom                   Varchar (25) NOT NULL ,
        prenom                Varchar (25) ,
        adresse               Text NOT NULL ,
        telephone             Varchar (15) NOT NULL ,
        email                 Varchar (100) NOT NULL ,
        id_categorie_personne Int ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: categorie_personne
#------------------------------------------------------------

CREATE TABLE categorie_personne(
        nom  Varchar (30) NOT NULL ,
        prix Float NOT NULL ,
        id   int (11) Auto_increment  NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: piece_inscription
#------------------------------------------------------------

CREATE TABLE piece_inscription(
        id  int (11) Auto_increment  NOT NULL ,
        nom Varchar (50) NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: actualite
#------------------------------------------------------------

CREATE TABLE actualite(
        titre              Varchar (50) NOT NULL ,
        image              Varchar (25) ,
        desc_courte        Text ,
        desc_longue        Text ,
        date_debut         Date ,
        date_fin           Date ,
        date_mise_en_ligne Date NOT NULL ,
        id                 int (11) Auto_increment  NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: responsable
#------------------------------------------------------------

CREATE TABLE responsable(
        nom    Varchar (25) NOT NULL ,
        prenom Varchar (25) NOT NULL ,
        email  Varchar (100) NOT NULL ,
        id     int (11) Auto_increment  NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: creneau
#------------------------------------------------------------

CREATE TABLE creneau(
        heure_debut    Time NOT NULL ,
        heure_fin      Time NOT NULL ,
        effectif       Int NOT NULL ,
        id             int (11) Auto_increment  NOT NULL ,
        jour           Int NOT NULL ,
        id_responsable Int NOT NULL ,
        id_niveau      Int NOT NULL ,
        id_lieu        Int NOT NULL ,
        id_activite    Int NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: sport
#------------------------------------------------------------

CREATE TABLE sport(
        nom Varchar (25) NOT NULL ,
        id  int (11) Auto_increment  NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: activite
#------------------------------------------------------------

CREATE TABLE activite(
        nom Varchar (25) ,
        id  int (11) Auto_increment  NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: inscription
#------------------------------------------------------------

CREATE TABLE inscription(
        en_attente    Bool NOT NULL ,
        demande       Bool NOT NULL ,
        ects          Int ,
        nombre_heures Int ,
        id_personne   Int NOT NULL ,
        id_creneau    Int NOT NULL ,
        PRIMARY KEY (id_personne ,id_creneau )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: demande
#------------------------------------------------------------

CREATE TABLE demande(
        id_piece_inscription  Int NOT NULL ,
        id_categorie_personne Int NOT NULL ,
        PRIMARY KEY (id_piece_inscription ,id_categorie_personne )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: appartient
#------------------------------------------------------------

CREATE TABLE appartient(
        id_categorie_sport Int NOT NULL ,
        id_sport           Int NOT NULL ,
        PRIMARY KEY (id_categorie_sport ,id_sport )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: concerne
#------------------------------------------------------------

CREATE TABLE concerne(
        id_sport     Int NOT NULL ,
        id_actualite Int NOT NULL ,
        PRIMARY KEY (id_sport ,id_actualite )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: de_type
#------------------------------------------------------------

CREATE TABLE de_type(
        id_sport    Int NOT NULL ,
        id_activite Int NOT NULL ,
        PRIMARY KEY (id_sport ,id_activite )
)ENGINE=InnoDB;

ALTER TABLE personne ADD CONSTRAINT FK_personne_id_categorie_personne FOREIGN KEY (id_categorie_personne) REFERENCES categorie_personne(id);
ALTER TABLE creneau ADD CONSTRAINT FK_creneau_id_responsable FOREIGN KEY (id_responsable) REFERENCES responsable(id);
ALTER TABLE creneau ADD CONSTRAINT FK_creneau_id_niveau FOREIGN KEY (id_niveau) REFERENCES niveau(id);
ALTER TABLE creneau ADD CONSTRAINT FK_creneau_id_lieu FOREIGN KEY (id_lieu) REFERENCES lieu(id);
ALTER TABLE creneau ADD CONSTRAINT FK_creneau_id_activite FOREIGN KEY (id_activite) REFERENCES activite(id);
ALTER TABLE inscription ADD CONSTRAINT FK_inscription_id_personne FOREIGN KEY (id_personne) REFERENCES personne(id);
ALTER TABLE inscription ADD CONSTRAINT FK_inscription_id_creneau FOREIGN KEY (id_creneau) REFERENCES creneau(id);
ALTER TABLE demande ADD CONSTRAINT FK_demande_id_piece_inscription FOREIGN KEY (id_piece_inscription) REFERENCES piece_inscription(id);
ALTER TABLE demande ADD CONSTRAINT FK_demande_id_categorie_personne FOREIGN KEY (id_categorie_personne) REFERENCES categorie_personne(id);
ALTER TABLE appartient ADD CONSTRAINT FK_appartient_id_categorie_sport FOREIGN KEY (id_categorie_sport) REFERENCES categorie_sport(id);
ALTER TABLE appartient ADD CONSTRAINT FK_appartient_id_sport FOREIGN KEY (id_sport) REFERENCES sport(id);
ALTER TABLE concerne ADD CONSTRAINT FK_concerne_id_sport FOREIGN KEY (id_sport) REFERENCES sport(id);
ALTER TABLE concerne ADD CONSTRAINT FK_concerne_id_actualite FOREIGN KEY (id_actualite) REFERENCES actualite(id);
ALTER TABLE de_type ADD CONSTRAINT FK_de_type_id_sport FOREIGN KEY (id_sport) REFERENCES sport(id);
ALTER TABLE de_type ADD CONSTRAINT FK_de_type_id_activite FOREIGN KEY (id_activite) REFERENCES activite(id);
