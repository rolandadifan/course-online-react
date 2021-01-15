import React,{useState,useRef} from 'react';
import {useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'component/form/select';
import Input from 'component/form/input';
import useForm from 'helpers/hooks/useForm';
import fieldErrors from 'helpers/fieldError';
import users from 'constan/api/users';
import media from 'constan/api/media';

import {populateProfile} from 'store/action/users';
import imagebase64 from 'utils/Imagebase64';
import { ReactComponent as DefaultUser } from 'assets/images/default-avatar1.svg';

function SettingForm({details}) {

    const dispatch = useDispatch()
    const addPicture = useRef(null)

    const [state, setKey, setState] = useForm({
        name: details?.name ?? "",
        email: details?.email ?? "",
        profession: details?.profession ?? "",
        avatar: details?.avatar ?? "",
        password: details?.password ?? "",
        otherProfession: details?.otherProfession ?? ""
    })

    const [errors, setErrors] = useState(null)

    function previewImage(e) {
        e.persist()
        imagebase64(e.target.files[0]).then(image => {
            setKey({
                target: {
                    name: e.target.name,
                    value: image,
                }
            })
        })
    }

    async function submit(e) {
        e.preventDefault()
        const payload = {
            name: state.name,
            email: state.email,
            password: state.password,
            profession: state.profession
        }
        if(payload.profession === "others")
        payload.profession = state.otherProfession

        if(state.avatar.indexOf("base64") > -1){
            const avatar = await media.upload(state.avatar)
            payload.avatar = avatar.data.image
        }
        users.update(payload).then(res => {
            toast.success("Profile Updated")
            setState({
                ...state,
                password: ""
            })
            setErrors(null)
            dispatch(populateProfile({
                ...details,
                ...res.data
            }))
        }).catch(error => {
            setErrors(error?.response?.data?.message ?? "error")
        })
    }
    const ERRORS = fieldErrors(errors);
    return (
        <>
            <section className="flex flex-col mt-8">
              <div className="flex justify-start items-center -mx-5">
                  <div className="w-auto text-center px-5">
                      <div className="rounded-full overflow-hidden w-24 h-24">
                          {
                              state.avatar ? 
                              <img className="object-cover w-full h-full" src={state.avatar} alt="preview"/> :

                          <DefaultUser className="fill-indigo-500" style={{ width:90, height:90 }}></DefaultUser>
                          }
                      </div>
                  </div>
                    <div className="w-full flex flex-col">
                        <span className="text-gray-600">Add your picture...</span>
                        <div>
                            <input type="file" name="avatar" className="hidden" ref={addPicture} onChange={previewImage}/>
                            <button onClick={() => addPicture.current.click()} className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-3">Add Picture</button>
                        </div>
                    </div>
              </div>

            </section>

            <section className="flex flex-col mt-8">
                <div className="flex items-center pb-12">
                    <div className="w-full sm:w-4/12">
                        <form onSubmit={submit}>
                             <Input error={ERRORS?.name?.message} name="name" onChange={setKey} placeholder="Your name" labelName="Full Name"  value={state.name}></Input>
          <div className="flex flex-col mb-4">
            <label htmlFor="email"  className={["text-lg mb-2", ERRORS?.email?.message ? "text-red-500" : "text-gray-900"].join(" ")}>
              Email Address
            </label>
            <input
              name="email"
              type="email"
              onChange={setKey}
              className={['bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500', ERRORS?.email?.message ? "border-red-500 text-red-500" : "focus:border-teal-500 border-gray-600 text-gray-600"].join(" ")}
              value={state.email}
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
              onChange={setKey}
              className={['bg-white focus:outline-none border w-full px-6 py-3 w-1/2 border-gray-600 focus:border-teal-500', ERRORS?.password?.message ? "border-red-500 text-red-500" : "focus:border-teal-500 border-gray-600 text-gray-600"].join(" ")}
              value={state.password}
              placeholder="Your password addres"
            />
            <span className="text-red-500 pt-2">
                {ERRORS?.password?.message}
            </span>
          </div>

          <div className="flex flex-col mb-4">
              <Select name="profession" value={state.profession} labelName="Occupation" fallbackText="Select Your Focus" onClick={setKey}>
                  <option value="">webs desainer</option>
                  <option value="web developer">frond end developer</option>
                  <option value="back end developer">back end developer</option>
                  <option value="full stack">full stack</option>
                  <option value="others">others</option>
              </Select>
          </div>

           {state.profession === "others" && (
            <Input
              value={state.otherProfession}
              error={ERRORS?.otherProfession?.message}
              name="otherProfession"
              type="text"
              onChange={setKey}
              placeholder="Your occupation"
              labelName="Other Occupation"
            />
          )}
           <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-4"
          >
            Update
          </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default withRouter(SettingForm)