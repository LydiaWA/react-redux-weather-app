import { connect } from 'react-redux';
import SearchBar from './searchBar';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
    lineItems: store.search.lineItems,
    error: store.search.error
    };
}

export default connect(mapStoreToProps)(SearchBar);
