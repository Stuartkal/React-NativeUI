import {createAppContainer , createStackNavigator} from 'react-navigation'
import Learn from './Learn'
import Courses from './Courses'

const Route = createStackNavigator({
    Learn : Learn,
    Courses : Courses
   });
   
 export default createAppContainer (Route)