import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";

export default function ViewCourse() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [reviewModal, setReviewModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    (async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token);
      // console.log("Course Data here... ", courseData.courseDetails)
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));
      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });
      dispatch(setTotalNoOfLectures(lectures));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)]">
        <div className="hidden sm:block">
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
        </div>

        {!showSidebar && (
          <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
            <div className="mx-6">
              <Outlet />
            </div>
          </div>
        )}

        <div>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="sm:hidden fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-2 rounded-full"
          >
            {showSidebar ? "Hide" : "Show"} Sidebar
          </button>


          <div className="sm:hidden  ">
            {showSidebar && (
              <div>
                <VideoDetailsSidebar setReviewModal={setReviewModal} />
              </div>
            )}
          </div>
        </div>
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
}
