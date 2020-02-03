import { connect } from 'react-redux'
import Filter from './list-filter'
import { IFilter } from '../../../redux/store/state-types'
import { changeFilter } from '../../../redux/actions/actions'

const mapStateToProps = (state: any) => ({
    filter: state.visibilityFilter.filter
})

const mapDispatchToProps = (dispatch: any) => ({
    setFilter: (value: IFilter) => dispatch(changeFilter(value))
})

const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterContainer