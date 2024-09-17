const Banner = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '60vh',
        color: 'white'
      }}
    >
      <div
        style={{
          flex: 1,
          background: '#FFA500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Welcome to the Central Government Portal
          </h1>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          background: '#008000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
            Providing services and information to all citizens.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Banner