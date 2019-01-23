import { connect } from 'react-redux';
import CityInfo from './cityInfo';

function mapStoreToProps(store) {
  return {
    cityInfo: store.search.cityInfo,
    };
}

export default connect(mapStoreToProps)(CityInfo);
