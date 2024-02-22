using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class Invoice
{
    public int InvId { get; set; }

    public string? Date { get; set; }

    public int MdlId { get; set; }

    public int Quantity { get; set; }

    public int TotalPrice { get; set; }

    public string? Username { get; set; }
}
