/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const courseToPrereq = {};

  for (let course = 0; course < numCourses; course++) {
    courseToPrereq[course] = [];
  }

  for (const [course, prereq] of prerequisites) {
    courseToPrereq[course].push(prereq);
  }

  const cycle = new Set();

  function dfs(course) {
    if (cycle.has(course)) {
      return false;
    }

    if (!courseToPrereq[course].length) {
      return true;
    }

    cycle.add(course);

    for (const prereq of courseToPrereq[course]) {
      if (!dfs(prereq)) {
        return false;
      }
    }

    cycle.delete(course);

    courseToPrereq[course] = [];

    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};
