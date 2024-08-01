import { createBrowserRouter } from 'react-router-dom';
import ProfileHero from './Components/ProfileHero';
import EducationHistory from './Pages/EducationHistory';
import CourseList from './Pages/Courses/CourseList';
import CourseDescription from './Pages/Courses/CourseDescription';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <ProfileHero />
    },
    {
        path: '/educationistory',
        element: <EducationHistory />
    },
    {
        path: '/courses',
        element: <CourseList />
    },
    {
        path: '/courses/description',
        element: <CourseDescription />
    },
    // Add more routes as needed
]);

export default Routes;
