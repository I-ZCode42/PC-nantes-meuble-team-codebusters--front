import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Api } from "../data/Api.js";
import {useState} from 'react'; 

function BasicButtonExample() {
  const data = Api();
  const commode = ["commode"];
  const uniqueCategory = data.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.category === current.category)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);
  
  return (
      <div>
      <div>
        <DropdownButton id="dropdown-basic-button" title="Catégories">
          {uniqueCategory.map((furniture) => (
              <div class="card" key={furniture}>
              <Dropdown.Item>
                {furniture.category}
              </Dropdown.Item>
            </div>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
}
export default BasicButtonExample;
