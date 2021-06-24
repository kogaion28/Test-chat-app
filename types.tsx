

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type PrincipalTabParamList = {
  Camera: undefined;
  Chat: undefined;
  Status: undefined;
  Telefone: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri:String;

}

export type Message = {
  id: String;
  content:string;
  createdAt:number;
}

export type ChatRoom = {
  id: String; 
  users: [User];
  lastMessage: Message;
}