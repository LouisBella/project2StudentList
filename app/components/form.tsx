import React from 'react';

export default function formdisplay()
{
    return(
        <div>
            <form>
                
                <label htmlFor="firstAndLast">
                    First and Last name
                </label>
                <input type="text" name="firstAndLast"/>
           

                
                {/***
                 * Don't think I need to add a calendar here?
                 */}

                <label htmlFor="dob">
                    Date of Birth. Please input the in the format of YYYY-MM-DD.
                </label>
                <input type="text" name="dob"/>
                



                <label htmlFor="curGrade">
                    Current Grade
                </label>
                <input type="text" name="curGrade"/>
              


                <button>
                    Submit
                </button>

            </form>
        </div>
    )
}



{/** Function to connect html with the react?  */}