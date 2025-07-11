let CurrenTime = () => {
  return (
    <p className="fw-medium">
      This is the current time: {new Date().toLocaleTimeString()}
    </p>
  );
};

export default CurrenTime;
