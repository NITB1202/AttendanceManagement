import React, { useEffect } from 'react';
import Login from './authentication/login';
import { useAuth } from '@/context/AuthContext';
import { Role } from '@/enum/RoleEnum';
import { router } from "expo-router";

const App = () => {
  const { authState} = useAuth();

  useEffect(() => {
    if (authState.authenticated) {
      switch (authState.role) {
        case Role.MANAGER:
          router.push("/section_manager/dashboard_manager");
          break;
        case Role.STUDENT:
          router.push("/section_student/dashboard_student");
          break;
        case Role.TEACHER:
          router.push("/section_teacher/dashboard_teacher");
          break;
        default:
          console.log('Unknown role');
      }
    }
  }, [authState, router]);

  return (
    <Login/>
  );
};

export default App;
