import jwt from 'jsonwebtoken'
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const normalizedEmail = (email || '').trim().toLowerCase()
        const normalizedPassword = (password || '').trim()
        const adminEmail = (process.env.ADMIN_EMAIL || '').trim().toLowerCase()
        const adminPassword = (process.env.ADMIN_PASSWORD || '').trim()

        if (normalizedEmail === adminEmail && normalizedPassword === adminPassword) {
            const token = jwt.sign(normalizedEmail + normalizedPassword, process.env.JWT_SECRET)
            res.json({
                success: true,
                token, 
                message: "login successful",
            })
        } else {
            res.json({
                success: false,
                message: "Invalid login details"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export { adminLogin }