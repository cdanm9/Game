namespace game;

entity Characters {
  key id: Integer;
  name  : String(100);
  description  : String(200);
  level:Integer;
  hp:Integer;
}

entity Weapons {
  key id: Integer;
  name  : String(100);
  description  : String(200);
  level:Integer;
  attack: Integer;
}

entity Artifacts{
  key id: Integer;
  name: String(100);
  description:String(500);
  attack:Integer;
  defence:Integer;
  hp:Integer;
}

entity Functions{ 
  key fnCode:String(100);
  key srvCode:String(100);          
  fnName:String(100);
  srvName:String(100);
  fnDesc:String(200);
  srvDesc:String(200);      
}
