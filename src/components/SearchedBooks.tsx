import { Grid } from '@mui/material';
import BooksCard from './Utilities/BooksCard';
import PageLoader from './Utilities/PageLoader';
import ErrorOccurred from './Utilities/ErrorOccured';
import NoBookFound from './Utilities/NoBookFound';
import { useSearchBooks } from '../hooks';
import { SearchedBooksType } from '../Types.d';

function SearchedBooks() {
  const { loading, books, error } = useSearchBooks();

  if (loading) {
    return <PageLoader />;
  }

  if (!loading && error) {
    return <ErrorOccurred />;
  }

  if (!loading && books?.docs.length === 0) {
    return <NoBookFound />;
  }
  return (
    <Grid container spacing={4}>
      {books?.docs.map((book: SearchedBooksType) => (
        <Grid item key={book.key} xs={12} sm={6} md={3}>
          <BooksCard
            title={book.title}
            author_name={book.author_name}
            id={book.seed[0]}
            coverImage={
              book['cover_i']
                ? `https://covers.openlibrary.org/b/id/${book['cover_i']}-M.jpg`
                : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png'
            }
            key={''}
            cover_i={undefined}
            seed={[]}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default SearchedBooks;
