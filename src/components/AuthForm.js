const AuthForm = ({ type }) => {
  return (
    <div>
      <h3>
        <p className="text-center mt-4 mb-4">
          {type === "signup" ? "회원가입" : "로그인"}
        </p>
      </h3>
    </div>
  );
};

export default AuthForm;
