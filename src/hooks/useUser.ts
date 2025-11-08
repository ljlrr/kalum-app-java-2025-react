import { useDispatch, useSelector } from "react-redux"
import type { AppDispath, RootState } from "../store/store";
//import {userService} from '../services/useService';
import {userService} from '../components/services/useServices';


export const useUser = () => {
    const {users} = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch<AppDispath>();

    const getUsers = async () => {
        const response = await userService.findAll();
        return response; 
    }

    return {
        getUsers
    }
}   
