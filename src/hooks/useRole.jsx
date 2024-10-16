import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { getUserRole } from "../api/rooms";

const useRole = () => {
  const {user,loading}=useAuth(); 

  // // get user role
  // useEffect(() => {
  //   getUserRole(user?.email)
  //   .then(data=>{
  //       console.log(data)
  //       setRole(data)
  //       setLoading(false)
  //   })
      
  // }, [user]);
  // console.log(roles)

  const {data:roles,isLoading} = useQuery({
    enabled: !loading && !!user?.email,
    queryKey:['roles'],
    queryFn: async ()=> {
      const res = await getUserRole(user?.email)
      console.log(res)
      return res
    }

  })
  console.log(roles)

  return [roles,isLoading];
};

export default useRole;
