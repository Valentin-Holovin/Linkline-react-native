import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type AuthStackParamList = {
    Welcome: undefined
    SignIn: undefined
    SignUp: undefined
}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>

export type MainBottomParamList = {
  Events: NavigatorScreenParams<EventStackParamList>
  Chats: undefined
  Profile: { id:string }
}

export type MainBottomScreenProps<T extends keyof MainBottomParamList> =
  BottomTabScreenProps<MainBottomParamList, T>

export type EventStackParamList = {
    Events: undefined
    EvendDetails: { id:string }
}

export type EventStackScreenProps<T extends keyof EventStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<EventStackParamList, T>,
        MainBottomScreenProps<keyof MainBottomParamList>
    >

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, MainBottomParamList {}
  }
}
