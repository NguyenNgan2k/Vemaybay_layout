import React, { useState, useEffect } from "react";
import Airplane from "../assets/img/icon_flight.png";
import Convert from "../assets/img/icon-convert.png";
import ChooseAddress from "../input/ChooseAddress";
import { formValueSelector, reduxForm, Field, change } from "redux-form";
import { connect, useDispatch } from "react-redux";
import RenderCheck from "../input/renderCheck";
import RenderDate from "../input/renderDate";
import * as _ from "lodash";
import { formatDate } from "../utils";

function usePrevious(value) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function FormSearchTicket(props) {
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [baby, setBaby] = useState(0);

  const dispatch = useDispatch();
  const { formOneWay, formTwoWay, formManyWay } = props;

  const preFormOneWay = usePrevious(formOneWay);
  const preFormTwoWay = usePrevious(formTwoWay);
  const preFormManyWay = usePrevious(formManyWay);

  useEffect(() => {
    if (formOneWay && !_.isEqual(formOneWay, preFormOneWay)) {
      dispatch(change("formSearchTicket", "formTwoWay", ""));
      dispatch(change("formSearchTicket", "formManyWay", ""));
    }
    if (formTwoWay && !_.isEqual(formTwoWay, preFormTwoWay)) {
      dispatch(change("formSearchTicket", "formOneWay", ""));
      dispatch(change("formSearchTicket", "formManyWay", ""));
    }
    if (formManyWay && !_.isEqual(formManyWay, preFormManyWay)) {
      dispatch(change("formSearchTicket", "formOneWay", ""));
      dispatch(change("formSearchTicket", "formTwoWay", ""));
    }
  }, [formOneWay, formTwoWay, formManyWay]);

  return (
    <>
      <div className="w-full h-96 bg-[#FFA300] py-12">
        <form>
          <div className="p-5 bg-white mx-auto max-w-screen-lg text-base font-bold">
            <div className="p-2 h-16 mb-4 w-40 flex items-center border-b-2 border-[#f7941d]">
              <img src={Airplane} alt="" className="h-8 w-9 mr-2" />
              <span className="text-[#FFA300]">Vé máy bay</span>
            </div>

            <div className="block lg:flex mb-4">
              <div className="flex mr-auto">
                <div className="py-2 pr-5 flex">
                  <Field name="formOneWay" component={RenderCheck} id={1} />
                  <label className="pl-2">Một chiều</label>
                </div>
                <div className="py-2 pr-5 flex">
                  <Field name="formTwoWay" component={RenderCheck} id={2} />
                  <label className="pl-2">Khứ hồi</label>
                </div>
                <div className="py-2 pr-5 flex">
                  <Field name="formManyWay" component={RenderCheck} id={3} />
                  <label className="pl-2">Nhiều chặng</label>
                </div>
              </div>
              <div className="py-2 flex">
                <Field name="formAllMonth" component={RenderCheck} id={4} />
                <label className="pl-2">Tìm vé cả tháng</label>
              </div>
            </div>

            <div className="block lg:flex w-full">
              <div className="w-full lg:w-2/3 mr-10">
                <div className="block lg:flex justify-between mb-4">
                  <div className="w-full lg:w-60">
                    <label className="text-[#837a76] font-medium">
                      Điểm đi
                    </label>
                    <Field name="formPointGo" component={ChooseAddress} />
                  </div>
                  <img src={Convert} className="h-2 self-end mb-2" />
                  <div className="w-full lg:w-60">
                    <label className="text-[#837a76] font-medium">
                      Điểm đến
                    </label>
                    <Field name="formPointReturn" component={ChooseAddress} />
                  </div>
                </div>
                <div className="block lg:flex justify-between mb-2">
                  <div className="w-full lg:w-60">
                    <label className="text-[#837a76] font-medium">
                      Ngày đi
                    </label>
                    <Field name="formDateGo" component={RenderDate} />
                  </div>
                  <img src={Convert} className="h-2 self-end mb-2" />
                  <div className="w-full lg:w-60">
                    <label className="text-[#837a76] font-medium">
                      Ngày về
                    </label>
                    <Field
                      name="formDateReturn"
                      component={RenderDate}
                      disabled={formOneWay === 1}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-center">Người lớn</div>
                  <div className="flex justify-between items-center border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 border-2 border-orange-400 rounded"
                      onClick={() => {
                        if (adult > 1) setAdult(adult - 1);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                    <span>{adult}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 border-2 border-orange-400 rounded"
                      onClick={() => {
                        if (adult < 9) setAdult(adult + 1);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-center">Trẻ em</div>
                  <div className="flex justify-between items-center border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 border-2 border-orange-400 rounded"
                      onClick={() => {
                        if (children > 0) setChildren(children - 1);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                    <span>{children}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 border-2 border-orange-400 rounded"
                      onClick={() => {
                        if (children < 9) setChildren(children + 1);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-center">Em bé</div>
                  <div className="flex justify-between items-center border p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 border-2 border-orange-400 rounded"
                      onClick={() => {
                        if (baby > 0) setBaby(baby - 1);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                    <span>{baby}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 border-2 border-orange-400 rounded"
                      onClick={() => {
                        if (baby < 1) setBaby(baby + 1);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </div>
                </div>
                <button className="col-span-3 p-3 bg-[#ff6d00] text-white font-medium rounded flex justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="5"
                    stroke="currentColor"
                    className="w-4 h-4 self-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <span> TÌM KIẾM CHUYẾN BAY</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

FormSearchTicket = reduxForm({
  form: "formSearchTicket",
  enableReinitialize: true,
})(FormSearchTicket);

const selector = formValueSelector("formSearchTicket");

const mapStateToProps = (state) => {
  console.log(state);

  const {
    formOneWay,
    formTwoWay,
    formManyWay,
    formDateGo,
    formDateReturn,
    formPointGo,
    formPointReturn,
  } = selector(
    state,
    "formOneWay",
    "formTwoWay",
    "formManyWay",
    "formDateGo",
    "formDateReturn",
    "formPointGo",
    "formPointReturn"
  );
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return {
    formOneWay,
    formTwoWay,
    formManyWay,
    formDateGo,
    formDateReturn,
    formPointGo,
    formPointReturn,
    initialValues: {
      formOneWay: 1,
      formDateGo: formatDate(new Date(), "/", "dmy"),
      formDateReturn: formatDate(d, "/", "dmy"),
    },
  };
};
export default connect(mapStateToProps)(FormSearchTicket);
