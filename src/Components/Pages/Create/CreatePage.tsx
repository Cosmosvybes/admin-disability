import {
  ArrowDropRight,
  Logout,
  SendFast,
  UploadRectangle,
} from "react-huge-icons/solid";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "reactstrap";
import useCreateController from "./controller";
import motherhoodLogo from "../../../assets/mother.jpg";
const CreatePage = () => {
  const {
    handleFileUpload,
    handleFormSubmit,
    image,
    description,
    hyperLink,
    title,
    setHyperlink,
    setDescription,
    setTitle,
    loading,
    toggle,
    handleSignout,
    handleToggle,
  } = useCreateController();

  return (
    <div>
      <Modal centered isOpen={toggle} toggle={handleToggle}>
        <ModalHeader>Creating new Updates</ModalHeader>
        <ModalBody>
          Do you want to post this updates?
          <ModalFooter>
            <Button onClick={handleToggle} color="danger">
              Cancel
            </Button>
            <Button onClick={handleFormSubmit} color="primary">
              Proceed
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
      <Button
        onClick={handleSignout}
        className=" h-auto rounded-none w-auto fixed z-20 right-20 max-sm:right-5 bottom-24"
      >
        Sign out <Logout className="text-2xl text-black inline" />
      </Button>
      <div className="relative bg-gray-100  py-3 gap-4 flex flex-col">
        <div className="relative max-sm:px-2 max-sm:items-center flex max-sm:justify-center justify-start px-20 items-center gap-2">
          {" "}
          <div
            className="relative w-24 h-24 max-md:h-24 max-sm:hidden  max-md:w-24 max-sm:w-24 max-sm:w-h-24 flex justify-center items-center rounded-full"
            style={{
              backgroundImage: `url(${motherhoodLogo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <h1 className="text-6xl max-sm:text-2xl  font-extrabold">
            Disability & Motherhood
          </h1>{" "}
        </div>

        <div className="relative max-sm:px-2 flex h-auto max-sm:h-auto max-sm:flex-col-reverse  bg-gray-100  px-20 gap-5 max-sm:gap-2  justify-around items-start">
          <div className="relative h-full   rounded-3xl  py-2 bg-gray-50 px-5 max-sm:px-2  flex justify-start flex-col w-4/5 max-sm:w-full">
            <div className="relative ">
              <h1 className="text-4xl font-extrabold text-black text-left mt-5 mb-2">
                Hey What's new 🤭?
              </h1>
              <div
                className={`relative h-72 mt-4 max-sm:${
                  image ? "h-96" : "h-0"
                }  flex justify-end flex-col items-end `}
              >
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className={` relative w-1/4 flex justify-center items-center border-2 border-dashed max-sm:w-full max-sm:${
                    image ? "h-96" : "h-0"
                  } h-full object-contain  rounded-md`}
                >
                  {" "}
                  <Input
                    hidden
                    className="hidden"
                    type="file"
                    name="postImage"
                    id="postImage"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
              <div className="relative w-full flex justify-end items-end">
                <div className="relative  h-full border w-1/4 max-sm:w-full">
                  <label
                    htmlFor="postImage"
                    className="flex justify-between px-4 max-sm:px-2 items-center"
                  >
                    {" "}
                    <p> Upload research snapshot</p>
                    <UploadRectangle className="text-3xl   text-inherit" />{" "}
                  </label>{" "}
                </div>
              </div>

              <form
                action="/api/field-research-updates/new/post"
                method="POST"
                encType="multipart/form-data"
                className="flex flex-col gap-2 py-5 max-sm:py-2 max-md:py-3  max-sm:gap-2"
              >
                <Input
                  type="text"
                  placeholder="Research title"
                  className="w-full text-2xl max-sm:text-xl bg-gray-100 rounded-sm py-4 px-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  maxLength={500}
                  placeholder="Research brief description"
                  className="w-full h-72 text-2xl max-sm:text-xl bg-gray-100 rounded-sm  px-2 py-4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="hyperlink"
                  value={hyperLink}
                  className="w-full rounded-sm text-2xl max-sm:text-xl  text-black px-2 py-4"
                  onChange={(e) => setHyperlink(e.target.value)}
                />
                <Button
                  onClick={handleToggle}
                  className="h-auto max-sm:text-sm    text-white mt-2 bg-black text-2xl font-semibold  w-1/4 max-sm:w-full py-3 rounded-md"
                >
                  Publish research updates{" "}
                  {loading ? (
                    <Spinner size={"sm"} type="border" />
                  ) : (
                    <SendFast className="text-xl text-white inline" />
                  )}
                </Button>
              </form>
            </div>
          </div>

          <div className="relative max-sm:w-full shadow-md z-30 rounded-3xl h-full max-sm:h-auto bg-gray-50 w-1/4">
            <div className="relative justify-center items-center flex px-2 py-3 max-sm:px-1">
              <div
                className="relative w-24 h-24 max-md:h-24  max-md:w-24 max-sm:w-24 max-sm:w-h-24 flex justify-center items-center rounded-full"
                style={{
                  backgroundImage: `url(${motherhoodLogo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="relative w-full px-2 max-sm:px-0">
              <h1 className="text-4xl max-sm:text-2xl font-extrabold text-black text-center mb-2">
                Welcome back , Admin
              </h1>
              <div className="relative h-80 flex justify-center items-center flex-col mt-4 px-2 bg-gray-100 w-full rounded-xl">
                <h1 className="text-xl font-extrabold text-black text-left mb-4">
                  Field and Research Updates Overview{" "}
                </h1>
                <h2 className="text-sm font-semibold text-center text-black mt-2">
                  Overall Research Updates{" "}
                  <ArrowDropRight className="text-xl text-black inline" />
                </h2>
                <h1 className="text-8xl animate-pulse font-extrabold text-center text-black ">
                  10+
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
