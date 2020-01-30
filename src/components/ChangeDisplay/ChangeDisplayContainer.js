
import { connect } from 'react-redux';
import ChangeDisplay from './ChangeDisplay';
import { onChangeDisplay } from '../../redux/search-reducer';

const mapStateToProps = () => ({
});
const mapDispatchToProps = (dispath) => ({
  changeDisplay: (value) => {
    dispath(onChangeDisplay(value));
  },
});
const ChangeDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(ChangeDisplay);
export default ChangeDisplayContainer;
