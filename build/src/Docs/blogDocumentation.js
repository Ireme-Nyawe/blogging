/**
 * @swagger
 * /api/cohort/blog/create:
 *   post:
 *     summary: New Blog Creation.
 *     tags: [Blog-Model]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               BlogImage:
 *                 type: string
 *               title:
 *                 type: string
 *               header:
 *                 type: string
 *               description:
 *                 type: string
 *               contents:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Good job, Blog Created Successfully.
 *       500:
 *         description: Blog Creation Failed.
 * 
 * /api/cohort/blog/viewBlogs:
 *   get:
 *     summary: View All Available Blogs.
 *     tags: [Blog-Model]
 *     responses:
 *       200:
 *         description: Available Blogs Retrieved.
 *       500:
 *         description: Failed to retrieve Available Blogs.
 * 
 * /api/cohort/blog/viewBlog/{id}:
 *   get:
 *     summary: View Specific Blog.
 *     tags: [Blog-Model]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID Of Blog To View.
 *     responses:
 *       200:
 *         description: A Given Blog Retrived Successfully.
 *       404:
 *         description: ID Specified Do Not Correspond To Any Blog.
 *       500:
 *         description: Failed to retrieve blog data.
 * 
 * 
 * /api/cohort/blog/update/{id}:
 *   put:
 *     summary: Update Blog With Provided Id.
 *     tags: [Blog-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Id Of Blog To Update.
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               BlogImage:
 *                  type: string
 *               title:
 *                 type: string
 *               header:
 *                 type: string
 *               description:
 *                 type: string
 *               contents:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Well Done, Blog Information Updated Successflly.
 *       404:
 *         description: Id Provided Do Not Correspond To Any Blog!.
 *       500:
 *         description: Failed To Delete Specified Blog!
 * 
 * 
 * /api/cohort/blog/delete/{id}:
 *   delete:
 *     summary: Use Id To Delete A Delete.
 *     tags: [Blog-Model]
 *     
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID Of The Blog To Delete.
 *     responses:
 *       200:
 *         description: Blog Information Deleted Successfull!!
 *       404:
 *         description: No Blog Corresponds To Provided ID!
 *       500:
 *         description: Failed To Delete A Given Blog!
 * 
 * 
 */
"use strict";
//# sourceMappingURL=blogDocumentation.js.map