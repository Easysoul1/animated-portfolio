import scss from './sidebar.scss';
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./link/Links";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="bg">
            <Links/>
        </div>
        <div>
            <ToggleButton/>
        </div>
    </div>
  )
}

export default Sidebar