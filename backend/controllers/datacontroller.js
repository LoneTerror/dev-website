export const getData = async (req, res) => {
   try {    
      const data = await Data.find(); // Assuming you have a Data model defined
      res.status(200).json(data);
   } catch (error) {   
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Internal server error" });
   }
};

export const createData = async (req, res) => {

};