/* eslint-disable @next/next/no-img-element */
import calculateAge from "@/helper/calculateAge";
import { Icon } from "@iconify/react";
import {
  Button,
  Select,
  SelectItem,
  Switch,
  Input,
  Textarea,
} from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function SearchPin() {
  const router = useRouter();
  const [accPin, setAccPin] = React.useState("");
  const [targetPage, setTargetPage] = React.useState(null);
  const [pets, setPets] = React.useState([]);

  useEffect(() => {
    const { query } = router;
    if (query?.target) {
      setTargetPage(query.target);
    }
  }, [router]);

  const handleSubmit = async () => {
    toast.loading("Searching pets...");
    const res = await axios.post("/api/pet/search/accpin", {
      pin: accPin,
    });
    toast.remove();
    if (res.data.success) {
      toast.success(res.data.message);
      setPets(res.data.pets);
    } else {
      toast.error(res.data.message);
    }
  };

  const PetCard = ({ name, age, image, id }) => {
    return (
      <Link href={`/pets/${id}`}>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start w-full">
          <div className="h-20 lg:h-16 w-20 shrink-0 lg:w-16 group rounded-full overflow-hidden">
            <img
              src={image}
              className="h-full w-full object-cover group-hover:scale-110 transition-all"
              alt=""
            />
          </div>
          <div className="mt-3 lg:mt-0 lg:ml-5 flex flex-col lg:block items-center justify-center">
            <h2 className="text-slate-800 font-medium text-base text-center lg:text-left">
              {name}
            </h2>
            <p className="text-xs mt-1 text-neutral-600">{age}</p>

            <button className="flex items-center text-blue-600 space-x-2 text-xs hover:underline mt-3">
              <span>Details</span>
              <span className="translate-y-[1px]">
                <Icon icon="formkit:right" />
              </span>
            </button>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="pt-16 pb-24">
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-vector/holographic-foil-pastel-rainbow-gradient-abstract-soft-pastel-colors-backdrop_961004-334.jpg"
          className="w-full h-[350px] object-cover absolute top-0 inset-x-0"
          alt=""
        />
        <div className="absolute z-0 inset-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent"></div>
      </div>
      <div className="top-[120px] bg-white max-w-xl w-full border rounded-3xl relative mx-auto overflow-hidden">
        <div className="mx-auto pb-10">
          <div className="px-10 mt-10">
            <h1 className="text-2xl text-center font-medium">Search pet</h1>
            <p className="text-sm text-center tracking-wide text-neutral-500 mt-3">
              * pin is provided by pet parent
            </p>
          </div>

          {pets.length > 0 && (
            <div>
              <div className="grid grid-cols-2 place-content-center px-10 gap-8 mt-10">
                {pets.map((pet, index) => {
                  return (
                    <PetCard
                      key={index}
                      name={pet.name}
                      age={calculateAge(pet.dateOfBirth)}
                      image={pet.image}
                      id={pet.id}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-end mt-10">
                <button
                  onClick={() => {
                    setPets([]);
                    setAccPin("");
                  }}
                  className="text-sm mr-10 text-blue-600 bg-blue-50/50 px-3 py-2 rounded-md"
                >
                  Search another
                </button>
              </div>
            </div>
          )}
          {pets.length == 0 && (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="grid grid-cols-1 gap-4 px-10 mt-6"
              >
                <Input
                  radius="sm"
                  value={accPin}
                  onChange={(e) => setAccPin(e.target.value.toUpperCase())}
                  label="Account pin"
                  classNames={{
                    label: "ml-2",
                    input: "px-2",
                  }}
                />
              </form>
              <div className="flex items-center justify-between px-10 mt-10">
                <div className="flex items-center w-fit"></div>
                <div>
                  <button className="text-sm mr-10 text-neutral-500">
                    Cancel
                  </button>
                  <Button
                    type="submit"
                    className="bg-black text-white h-fit rounded-md"
                    radius="none"
                  >
                    <div className=" px-3 py-3">Search pets</div>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPin;
