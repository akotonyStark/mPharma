import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AddModal from './components/AddModal'

import { multiply, makeLowercase } from "../HelperFunctions/HelperFunctions";
import { itIT } from '@material-ui/data-grid';

test("Multiply", () => {
    expect(multiply(2,10)).toBe(20)
})

it('checkAddModalRender', () => {
  const {queryByTitle} = render(<AddModal/>)
  const productName = queryByTitle('productName')
  expect(productName).toBeTruthy();
})

describe('clickSaveButton', ()=> {
  it('onClick', () => {
    const {queryByTitle} = render(<AddModal/>)
    const saveButton = queryByTitle('saveButton')
    expect(saveButton.innerHTML).toBe('Save')
    fireEvent.click(saveButton)
    
  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


