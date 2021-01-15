import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import users from 'constan/api/users';

import useForm from 'helpers/hooks/useForm';
import fieldErrors from 'helpers/fieldError'
import Select from 'component/form/select';
import Input from 'component/form/input'

function LoginForm({ history }) {
  const dispatch = useDispatch();

  const [{name, email, password, profession, otherProfession }, setState] = useForm({
    name: "",
    email: "",
    password: "",
    profession: "",
    otherProfession: ""
  });

  const [errors, setErrors] = useState(null)

  function submit(e) {
    e.preventDefault();

    users
      .register({name, email, password, profession: profession === "others" ? otherProfession : profession})
      .then((res) => {
       history.push("/login")
      })
      .catch((err) => {
          setErrors(err?.response?.data?.message)
      });
  }

  const ERRORS = fieldErrors(errors);

  return (
    <div className="flex justify-center items-center pb-24">
      <div className="w-full sm:w-3/12">
        <h1 className="text-4xl text-gray-900 mb-6">
          <span className="font-bold">Grow Skills</span> From, <br />
          Any <span className="font-bold">Where</span>
        </h1>
        <form onSubmit={submit}>
            <Input error={ERRORS?.name?.message} name="name" onChange={setState} placeholder="Your name" labelName="Full Name"  value={name}></Input>
          <div className="flex flex-col mb-4">
            <label htmlFor="email"  className={["text-lg mb-2", ERRORS?.email?.message ? "text-red-500" : "text-gray-900"].join(" ")}>
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={setState}
              className={['bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500', ERRORS?.email?.message ? "border-red-500 text-red-500" : "focus:border-teal-500 border-gray-600 text-gray-600"].join(" ")}
              value={email}
              placeholder="Your email addres"
            />
            <span className="text-red-500 pt-2">
                {ERRORS?.email?.message}
            </span>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="password"  className={["text-lg mb-2", ERRORS?.password?.message ? "text-red-500" : "text-gray-900"].join(" ")}>
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={setState}
              className={['bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500', ERRORS?.password?.message ? "border-red-500 text-red-500" : "focus:border-teal-500 border-gray-600 text-gray-600"].join(" ")}
              value={password}
              placeholder="Your password addres"
            />
            <span className="text-red-500 pt-2">
                {ERRORS?.password?.message}
            </span>
          </div>

          <div className="flex flex-col mb-4">
              <Select name="profession" value={profession} labelName="Occupation" fallbackText="Select Your Focus" onClick={setState}>
                  <option value="">webs desainer</option>
                  <option value="web developer">frond end developer</option>
                  <option value="back end developer">back end developer</option>
                  <option value="full stack">full stack</option>
                  <option value="others">others</option>
              </Select>
          </div>

           {profession === "others" && (
            <Input
              value={otherProfession}
              error={ERRORS?.otherProfession?.message}
              name="otherProfession"
              type="text"
              onChange={setState}
              placeholder="Your occupation"
              labelName="Other Occupation"
            />
          )}

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4 w-full"
          >
            Daftar Now
          </button>
        </form>
      </div>

      <div className="w-1/12 hidden sm:block"></div>

      <div className="w-5/12 hidden sm:block justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-8 -ml-16 left-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img
              src="images/register.jpg"
              alt="login"
            />
          </div>
          <div
            className="absolute z-10 bg-white bottom-0 right-0 py-3 px-4 -mr-12"
            style={{ width: 290 }}
          >
            <p className="text-gray-900 mb-2">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className="text-gray-600">Rolanda, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
