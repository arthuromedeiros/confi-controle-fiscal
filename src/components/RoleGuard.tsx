import type { AppRole } from '../types/domain'; import { useAuth } from '../contexts/AuthContext';
export function RoleGuard({roles,children}:{roles:AppRole[];children:React.ReactNode}){const {profile}=useAuth();return profile&&roles.includes(profile.perfil)?<>{children}</>:null;}
