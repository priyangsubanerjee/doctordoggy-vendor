import prisma from "./prisma";

export const FindPetByPin = async (pin) => {
  let pets = [];
  let sharedPets = [];
  let users = await prisma.user.findMany({
    where: {
      accountPin: pin,
    },
  });

  if (users.length == 1) {
    let m_pets = await prisma.pet.findMany({
      where: {
        parentEmail: users[0].email,
      },
    });

    if (users[0].sharedPets.length > 0) {
      for (let i = 0; i < users[0].sharedPets.length; i++) {
        let sharedPet = await prisma.pet.findUnique({
          where: {
            id: users[0].sharedPets[i],
          },
        });
        sharedPets.push(sharedPet);
      }
    }

    pets = m_pets.concat(sharedPets);
    pets = pets.map((pet) => {
      return {
        id: pet.id,
        image: pet.image,
        name: pet.name,
        dateOfBirth: pet.dateOfBirth,
      };
    });

    return {
      success: true,
      message: "Pets found",
      pets: pets,
    };
  }
};
