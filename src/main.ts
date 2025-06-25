// ========================================================================
// Données de Départ
// ========================================================================

const data: MediaData = {
  books: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
  movies: [
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
    },
    {
      title: "Parasite",
      director: "Bong Joon-ho",
      year: 2019,
    },
  ],
  albums: [
    {
      title: "Thriller",
      artist: "Michael Jackson",
      year: 1982,
    },
    {
      title: "Back in Black",
      artist: "AC/DC",
      year: 1980,
    },
  ],
};

// ========================================================================
// Exercice 1 : Typage de Constantes Simples
// ========================================================================
// Objectif : Comprendre et appliquer les types de base en TypeScript.
//
// 1. Créez une constante "appName" de type string contenant le nom de l'application.
// 2. Créez une constante "isOnline" de type boolean indiquant si l'application est connectée.
// 3. Créez une constante "maxItems" de type number représentant un maximum autorisé.

const appName: string = "Typescript Exercices";
const isOnline: boolean = false;
const maxItems: number = 15;

// ========================================================================
// Exercice 2 : Interfaces des Objets
// ========================================================================
// Objectif : Décrire le type de chaque catégorie de produit.
//
// 1. Créez une interface "Book" avec les propriétés correspondantes.
// 2. Créez une interface "Movie" avec les propriétés correspondantes.
// 3. Créez une interface "Album" avec les propriétés correspondantes.

interface Book {
    title: string;
    author?: string;
    year: number;
}

interface Movie {
    title: string;
    director?: string;
    year: number;
}

interface Album {
    title: string;
    artist?: string;
    year: number;
}

// ========================================================================
// Exercice 3 : Interface de l’Objet Global
// ========================================================================
// Objectif : Utilisez les interfaces précédentes pour typer l’objet "data".
//
// 1. Créez une interface "MediaData" avec trois propriétés :
//    - books : tableau de Book
//    - movies : tableau de Movie
//    - albums : tableau de Album
// 2. Typez la constante `data` contenant les données (plus haut dans le fichier)
//    avec l’interface MediaData.

interface MediaData {
    books: Array<Book>;
    movies: Array<Movie>;
    albums: Array<Album>;
}

// ========================================================================
// Exercice 4 : Fonction d’Affichage Contextuel
// ========================================================================
// Objectif : Créez une fonction qui adapte son message selon le type d’objet.
//
// 1. Créez une fonction "displayItemDetails" qui accepte un objet de type
//    Book, Movie ou Album (vous pouvez utiliser un type union).
// 2. La fonction doit afficher un message personnalisé selon le type d'objet.
//    Exemples :
//     - "Livre : The Hobbit par J.R.R. Tolkien (1937)"
//     - "Film : Inception réalisé par Christopher Nolan (2010)"
//     - "Album : Thriller par Michael Jackson (1982)"

function displayItemDetails(item: Book | Movie | Album){
    if (isBook(item)){
        console.log(`Livre : ${item.title} par ${item.author} (${item.year})`);
    }
    if (isMovie(item)){
        console.log(`Film : ${item.title} réalisé par ${item.director} (${item.year})`);
    }
    if (isAlbum(item)){
        console.log(`Album : ${item.title} par ${item.artist} (${item.year})`);
    }
}

function isBook(item: Book): item is Book{
    return item.author !== undefined;
}

function isMovie(item: Movie): item is Movie{
    return item.director !== undefined;
}

function isAlbum(item: Album): item is Album{
    return item.artist !== undefined;
}

// ========================================================================
// Exercice 5 : Boucle sur Tous les Éléments
// ========================================================================
// Objectif : Utiliser la fonction "displayItemDetails" avec tous les tableaux.
//
// 1. Parcourez tous les tableaux de "data" avec des boucles forEach.
// 2. Appelez "displayItemDetails" pour chaque élément rencontré

data.books.forEach(function(book: Book){
    displayItemDetails(book);
})
data.movies.forEach(function(movie: Movie){
    displayItemDetails(movie);
})
data.albums.forEach(function(album: Album){
    displayItemDetails(album);
})