const User = require('../models/User');

// Mark attendance for an employee
exports.markAttendance = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { date, status } = req.body;

        const employee = await User.findById(employeeId);
        if (!employee || employee.role !== 'employee') {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Check if attendance already exists for this date
        const existingRecordIndex = employee.attendance.findIndex(record => record.date === date);

        if (existingRecordIndex !== -1) {
            // Update existing record
            employee.attendance[existingRecordIndex].status = status;
        } else {
            // Add new record
            employee.attendance.push({ date, status });
        }

        await employee.save();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: 'Error marking attendance', error: error.message });
    }
};

// Get attendance for an employee
exports.getAttendance = async (req, res) => {
    try {
        const { employeeId } = req.params;

        const employee = await User.findById(employeeId);
        if (!employee || employee.role !== 'employee') {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(employee.attendance);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching attendance', error: error.message });
    }
};
