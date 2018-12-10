import { connect } from 'react-redux';
import searchHistory from './searchHistory';

function mapStoreToProps(store) {
  
  return {
    lineItems: store.search.lineItems,
  };
}

export default connect(mapStoreToProps)(searchHistory);