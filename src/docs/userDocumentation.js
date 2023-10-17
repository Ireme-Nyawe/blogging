/**
 * @swagger
 * /api/cohort/user/signUp:
 *   post:
 *     summary: Create A User Account.
 *     tags: [Users-Model]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               fname:
 *                 type: string
 *               lname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: An Account Created successfully.
 *       201:
 *         Good Job, User Account Created Well.
 *       500:
 *         description: Account Creation Failed!
 * 
 * /api/cohort/user/login:
 *   post:
 *     summary: SignIn For Advance .
 *     tags: [Users-Model]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Well Done, Logged successfully.
 *       500:
 *         description: SignIn Failed!
 * 
 * /api/cohort/user/viewUser/{id}:
 *   get:
 *     summary: View User Data Specifically.
 *     tags: [Users-Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Specific ID To User Wanted.
 *     responses:
 *       200:
 *         description: A given User Retrieved Successfully.
 *       404:
 *         description: User Not Do Not Correspond To Any User!
 *       500:
 *         description: Failed To Retrive Data.
 * 
 * /api/cohort/user/viewUsers:
 *   get:
 *     summary: View All Users Done With signUp.
 *     tags: [Users-Model]
 *     
 *     responses:
 *       200:
 *         description: All Users Retrieved Well.
 *       500:
 *         description: Failed To Retrieve Data Of All Users.
 * 
 * 
 * 
 * /api/cohort/user/update/{id}:
 *   put:
 *     summary: Update User With Provided Id.
 *     tags: [Users-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id Of User To Update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               fname:
 *                 type: string
 *               lname:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Well Done, User Information Updated Successflly.
 *       404:
 *         description: Id Provided Do Not Correspond To Any User!.
 *       500:
 *         description: Failed To Delete Specified User!
 * 
 * 
 * /api/cohort/user/delete/{id}:
 *   delete:
 *     summary: Use Id To Delete A User.
 *     tags: [Users-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete.
 *     responses:
 *       200:
 *         description: User Information Deleted Successfull!
 *       404:
 *         description: No User Corresponds To Provided ID!
 *       500:
 *         description: Failed To Delete A Given Blog!
 * 
 * 

 */
