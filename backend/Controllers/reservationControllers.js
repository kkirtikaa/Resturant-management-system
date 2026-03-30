import reservationModels from "../Models/reservationModels.js";

 const createReservation = async(req, res) => {
    try {
      const { name, email, phone, date, time, guests} = req.body;
      if(!name || !email || !phone || !date || !time || !guests){
         return res.json({success: false, message: "All fields are required"})
      }
      const newReservation = new reservationModels({name, email, phone, date, time, guests})
      await newReservation.save()

      res.status(201).json({success: true, message: "Reservation created successfully", reservation: newReservation})
      
    } catch (error) {
      console.log(error);
      res.json({message: error.message})
      
    }
 }

 const getAllReservations = async(req, res) => {
   try {
      const reservations = await reservationModels.find();
      res.json(reservations)
      
   } catch (error) {
      res.json({message: "Error fetching reservations"})
      
   }
    
 }  

 const deteleReservation = async(req, res) => {
   try {
      const{ id } = req.params;
      await reservationModels.findByIdAndDelete(id);
      res.json({message: "Reservation removed"})
   } catch (error) {
      res.json({message: "Error deleting reservation"})
   }
 }

    export {createReservation, getAllReservations, deteleReservation}