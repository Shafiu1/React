export function Profile(){
  return(
    <img
      src='https://i.imgur.com/8Km9tLL.jpg'
      alt='Katherine Johnson'
      className="p-2"
    />
  );
}

export function Gallery(){
  return(
    <section>
      <h2>Amazing Sceintist</h2>
      <Profile/>
      <Profile/>
      <Profile/>
    </section>
    
  );
}