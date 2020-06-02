import Enzyme, { shallow } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import checkPropTypes from "check-prop-types"


const findByTestAttr = (wrapper, value) => wrapper.find(`[data-testid="${value}"]`);
const configureAdapter = () => Enzyme.configure({ adapter: new EnzymeAdapter() })
const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'prop',
        component.name
    )
    
    expect(propError).toBeUndefined
}

export {
    findByTestAttr,
    configureAdapter,
    checkProps
}